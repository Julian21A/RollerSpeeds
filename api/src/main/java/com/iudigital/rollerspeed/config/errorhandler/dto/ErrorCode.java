package com.iudigital.rollerspeed.config.errorhandler.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {

    // JWT
    TOKEN_EXPIRED("TOKEN_EXPIRED", "The token has expired", HttpStatus.UNAUTHORIZED),
    TOKEN_UNSUPPORTED("TOKEN_UNSUPPORTED", "Token format is unsupported", HttpStatus.BAD_REQUEST),
    TOKEN_MALFORMED("TOKEN_MALFORMED", "The token is malformed", HttpStatus.BAD_REQUEST),
    TOKEN_BAD_SIGNATURE("TOKEN_BAD_SIGNATURE", "Invalid token signature", HttpStatus.UNAUTHORIZED),
    TOKEN_ILLEGAL_ARGUMENT("TOKEN_ILLEGAL_ARGUMENT", "Illegal argument in token", HttpStatus.BAD_REQUEST),
    JWT_ERROR("JWT_ERROR", "Unknown JWT processing error", HttpStatus.INTERNAL_SERVER_ERROR),
    TOKEN_INVALID("TOKEN_INVALID", "The token is invalid", HttpStatus.UNAUTHORIZED),

    //Login
    USER_NOT_FOUND("USER_NOT_FOUND", "User not found", HttpStatus.UNAUTHORIZED),
    INVALID_PASSWORD("INVALID_PASSWORD", "Invalid password", HttpStatus.UNAUTHORIZED);


    private final String code;
    private final String message;
    private final HttpStatus status;

    public static ErrorCode fromCode(String code) {
        return Arrays.stream(values())
                .filter(errorCode -> errorCode.code.equals(code))
                .findFirst()
                .orElse(JWT_ERROR);
    }
}
