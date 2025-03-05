package com.iudigital.rollerspeed.controller.user.login;

import com.iudigital.rollerspeed.model.user.login.UserLogin;
import com.iudigital.rollerspeed.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserLoginController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<UserLogin> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(userService.login(request.userName(), request.password()));
    }



}
