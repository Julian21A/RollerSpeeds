package com.rollerspeed.rollerspeed.config.jwt.filter;

import com.rollerspeed.rollerspeed.config.errorhandler.DTO.CustomException;
import com.rollerspeed.rollerspeed.config.errorhandler.DTO.ErrorCode;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private static final List<String> PUBLIC_ENDPOINTS = List.of("/auth", "/public");

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String path = request.getRequestURI();
        System.out.println("Request Path: " + path);

        boolean isPublicEndpoint = PUBLIC_ENDPOINTS.stream().anyMatch(path::contains);
        System.out.println("Es ruta pública: " + isPublicEndpoint);

        if (isPublicEndpoint) {
            filterChain.doFilter(request, response);
            return;
        }

        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new CustomException(ErrorCode.TOKEN_INVALID);
        }

        String token = authHeader.substring(7); // Extraer el token sin "Bearer "

        // Aquí podrías validar el token antes de continuar
        // Ejemplo: validarToken(token);

        request.setAttribute("token", token);

        filterChain.doFilter(request, response);
    }
}
