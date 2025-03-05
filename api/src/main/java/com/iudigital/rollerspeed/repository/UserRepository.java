package com.iudigital.rollerspeed.repository;

import com.iudigital.rollerspeed.model.user.login.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserLogin, Integer> {
    UserLogin findByUsername(String username);
}
