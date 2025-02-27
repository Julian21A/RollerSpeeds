package com.rollerspeed.rollerspeed.repository;

import com.rollerspeed.rollerspeed.model.user.login.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserLogin, Integer> {
    UserLogin findByUsername(String username);
}
