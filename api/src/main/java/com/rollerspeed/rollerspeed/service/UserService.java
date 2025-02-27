package com.rollerspeed.rollerspeed.service;

import com.rollerspeed.rollerspeed.model.user.login.UserLogin;

import java.util.Optional;

public interface UserService {
    UserLogin login(String username, String password);
}
