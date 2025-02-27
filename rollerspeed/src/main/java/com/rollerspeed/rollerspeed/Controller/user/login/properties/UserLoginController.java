package com.rollerspeed.rollerspeed.Controller.user.login.properties;

import com.rollerspeed.rollerspeed.model.user.login.UserLogin;
import com.rollerspeed.rollerspeed.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class UserLoginController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<UserLogin> login(@RequestParam String userName, @RequestParam String password) {
        return ResponseEntity.ok(userService.login(userName, password));
    }


}
