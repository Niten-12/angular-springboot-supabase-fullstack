package com.example.backend.service;

import com.example.backend.dto.AuthenticationRequest;
import com.example.backend.dto.AuthenticationResponse;
import com.example.backend.dto.RegistrationRequest;
import com.example.backend.model.Role;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());

        if (userOpt.isEmpty() || !passwordEncoder.matches(request.getPassword(), userOpt.get().getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        User user = userOpt.get();
        String token = jwtService.generateToken(user);

        return new AuthenticationResponse(token, user.getName(), user.getEmail(), user.getCreatedAt());

    }

    public AuthenticationResponse register(RegistrationRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User newUser = new User();
        newUser.setName(request.getName());
        newUser.setEmail(request.getEmail());
        newUser.setPassword(passwordEncoder.encode(request.getPassword()));

        // Assign default role USER (Role fetching can be dynamic)
        Role userRole = new Role();
        userRole.setId(1L); // Assuming 1 = USER
        newUser.setRole(userRole);

        userRepository.save(newUser);

        String token = jwtService.generateToken(newUser);
        return new AuthenticationResponse(token, newUser.getName(), newUser.getEmail(), newUser.getCreatedAt());

    }
}
