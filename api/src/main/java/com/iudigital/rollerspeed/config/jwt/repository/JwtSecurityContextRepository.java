package com.iudigital.rollerspeed.config.jwt.repository;

import com.iudigital.rollerspeed.config.jwt.manager.JwtAuthenticationManager;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.security.web.context.HttpRequestResponseHolder;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.stereotype.Component;


@Component
@RequiredArgsConstructor
public class JwtSecurityContextRepository implements SecurityContextRepository {

    private final JwtAuthenticationManager jwtAuthenticationManager;

    @Override
    public SecurityContext loadContext(HttpRequestResponseHolder requestResponseHolder) {
        HttpServletRequest request = requestResponseHolder.getRequest();
        String token = extractToken(request);

        if (token != null) {
            var authentication = jwtAuthenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(token, token)
            );

            SecurityContext securityContext = new SecurityContextImpl(authentication);
            SecurityContextHolder.setContext(securityContext);
            return securityContext;
        }

        return SecurityContextHolder.createEmptyContext();
    }

    @Override
    public void saveContext(SecurityContext context, HttpServletRequest request, HttpServletResponse response) {
        // No es necesario almacenar el contexto en este caso
    }

    @Override
    public boolean containsContext(HttpServletRequest request) {
        return SecurityContextHolder.getContext().getAuthentication() != null;
    }

    private String extractToken(HttpServletRequest request) {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7);
        }
        return null;
    }
}
