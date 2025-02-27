package com.rollerspeed.rollerspeed.config.errorhandler;

import com.rollerspeed.rollerspeed.config.errorhandler.DTO.CustomException;
import com.rollerspeed.rollerspeed.config.errorhandler.DTO.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ErrorResponse> handleCustomException(CustomException ex) {
        log.error("Custom Exception: {} - {}", ex.getErrorCode().getCode(), ex.getMessage());
        return buildErrorResponse(ex.getErrorCode().getCode(), ex.getMessage(), ex.getStatus());
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(String code, String message, HttpStatus status) {
        ErrorResponse errorResponse = ErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .code(code)
                .message(message)
                .status(status.name())
                .build();
        return new ResponseEntity<>(errorResponse, status);
    }
}
