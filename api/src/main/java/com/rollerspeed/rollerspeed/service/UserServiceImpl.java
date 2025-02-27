package com.rollerspeed.rollerspeed.service;

import com.rollerspeed.rollerspeed.config.jwt.provider.JwtProvider;
import com.rollerspeed.rollerspeed.config.errorhandler.DTO.CustomException;
import com.rollerspeed.rollerspeed.config.errorhandler.DTO.ErrorCode;
import com.rollerspeed.rollerspeed.model.user.login.UserLogin;
import com.rollerspeed.rollerspeed.repository.UserRepository;
import lombok.RequiredArgsConstructor;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;

    @Override
    public UserLogin login(String username, String password) {
        UserLogin user = findUserByUsername(username);
        return authenticateUser(user, password);
    }

    private UserLogin findUserByUsername(String username) {
        UserLogin user = userRepository.findByUsername(username);
        if (user == null) {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }
        return user;
    }

    private UserLogin authenticateUser(UserLogin user, String password) {
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new CustomException(ErrorCode.INVALID_PASSWORD);
        }

        String token = jwtProvider.generateToken(user);

        return new UserLogin(
                user.getId(),
                user.getUsername(),
                null, // Excluir la contraseña
                user.getRole(),
                user.getName(),
                token
        );
    }
}
