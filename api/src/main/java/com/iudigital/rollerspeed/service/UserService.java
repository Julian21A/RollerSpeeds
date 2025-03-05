package com.iudigital.rollerspeed.service;

import com.iudigital.rollerspeed.model.user.login.UserLogin;

public interface UserService {
    UserLogin login(String username, String password);
}
