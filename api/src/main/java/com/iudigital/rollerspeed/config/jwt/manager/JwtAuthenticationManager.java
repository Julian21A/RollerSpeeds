package com.iudigital.rollerspeed.config.jwt.manager;

import com.iudigital.rollerspeed.config.errorhandler.dto.CustomException;
import com.iudigital.rollerspeed.config.errorhandler.dto.ErrorCode;
import com.iudigital.rollerspeed.config.jwt.provider.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Component
public class JwtAuthenticationManager implements AuthenticationManager {

    private final JwtProvider jwtProvider;

    @Override
    public Authentication authenticate(Authentication authentication) {
        try {
            Map<String, Object> claims = jwtProvider.getClaims(authentication.getCredentials().toString());
            List<SimpleGrantedAuthority> authorities = extractAuthorities(claims);
            return new UsernamePasswordAuthenticationToken(claims.get("sub"), null, authorities);
        } catch (Exception e) {
            throw new CustomException(ErrorCode.TOKEN_EXPIRED);
        }
    }

    private List<SimpleGrantedAuthority> extractAuthorities(Map<String, Object> claims) {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();

        Object rolesObj = claims.get("roles");
        if (rolesObj instanceof List<?> rolesList) {
            for (Object role : rolesList) {
                if (role instanceof Map<?, ?> roleMap) {
                    Object authorityObj = roleMap.get("authority");
                    if (authorityObj instanceof String authority) {
                        authorities.add(new SimpleGrantedAuthority(authority));
                    }
                }
            }
        }

        return authorities;
    }
}
