package com.example.backend.dto;

import java.time.LocalDateTime;

public class AuthenticationResponse {
    private String token;
    private String username;
    private String email;
    private LocalDateTime createdAt; // 🆕

    // Constructors
    public AuthenticationResponse() {
    }

    public AuthenticationResponse(String token, String username, String email, LocalDateTime createdAt) {
        this.token = token;
        this.username = username;
        this.email = email;
        this.createdAt = createdAt;
    }

    // Getters & Setters
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
