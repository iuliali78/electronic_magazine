package main.repositories;

import main.models.ERole;
import main.models.Role;
import main.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Component
public class Initialazer {
    private String defaultPassword;

    @Autowired
    PasswordEncoder passwordEncoder;

    private User[] users = new User[8];

    @Autowired
    private UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    private User[] getUsers() {
        this.defaultPassword = passwordEncoder.encode("1234");
        users[0] = new User("avdeeva@mail.ru", "Авдеева Анастасия Константиновна", defaultPassword);
        users[1] = new User("zaytsev@mail.ru", "Зайцев Максим Матвеевич", defaultPassword);
        users[2] = new User("ivanov@mail.ru", "Иванов Степан Валерьевич", defaultPassword);
        users[3] = new User("kuznetsov@mail.ru", "Кузнецов Илья Васильевич", defaultPassword);
        users[4] = new User("kuzmina@mail.ru", "Кузьмина София Юрьевна", defaultPassword);
        users[5] = new User("shapovalov@mail.ru", "Шаповалов Богдан Генадьевич", defaultPassword);
        users[6] = new User("fedenko@mail.ru", "Феденко Юлия Николаевна", defaultPassword);
        users[7] = new User("yakovleva@mail.ru", "Яковлева Виктория Викторовна", defaultPassword);

        return users;
    }

    public void initial() {
        Role userRole = roleRepository.findByName(ERole.ROLE_USER).orElseThrow(() -> new RuntimeException("Error, Role USER is not found"));

        Arrays.stream(getUsers()).forEach(user -> {
            Set<Role> role = new HashSet<>();
            role.add(userRole);
            user.setRoles(role);
            userRepository.save(user);
        });
    }
}
