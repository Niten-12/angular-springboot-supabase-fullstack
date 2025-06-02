package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.AuthenticationRequest;
import com.example.backend.dto.AuthenticationResponse;
import com.example.backend.dto.RegistrationRequest;
import com.example.backend.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/authenticate")
    public AuthenticationResponse login(@RequestBody AuthenticationRequest request) {
        return userService.authenticate(request);
    }

    @PostMapping("/register")
    public AuthenticationResponse register(@RequestBody RegistrationRequest request) {
        return userService.register(request);
    }
}
