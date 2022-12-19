package com.missyplusfour.missyplusfour.repository;

import com.missyplusfour.missyplusfour.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRespository extends JpaRepository<User, Long> {
}
