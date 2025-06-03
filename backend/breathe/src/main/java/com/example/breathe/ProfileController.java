//Import Necessary Statements
package com.example.breathe;

import java.util.concurrent.ConcurrentHashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//MVC Annotation
@RestController
@RequestMapping("/api/profile")

//Class Definition
public class ProfileController {

    //Create the hashmap to serve as a database
    static final ConcurrentHashMap<String, Profile> store = new ConcurrentHashMap<>();

    //Bind a method to HTTP Post
    @PostMapping
    public ResponseEntity<String> saveProfile(@RequestBody Profile profile)
    {
        store.put("defaultPatient", profile);
        return ResponseEntity.ok("Profile saved");
    }

    //Bind a method to HTTP Get
    @GetMapping
    public ResponseEntity<Profile> getProfile() {
        Profile existing = store.get("defaultPatient");
        if (existing == null)
        {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(existing); 
    }
}