package com.utdbank.domain;



import com.utdbank.domain.enumeration.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Table(name="tbl_user")
@Entity
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Pattern(regexp = "^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$", message = "Please enter valid SSN")
    @Size(min=11, max=11, message = "SSN should be exact 9 characters")
    @NotNull(message = "Please enter your SSN")
    @Column(nullable = false, unique = true, length = 11)
    private String ssn;

    @NotBlank(message="Please provide not blank firstName")
    @NotNull(message="Please provide your firstName")
    @Size(min=1,max=15,message="FirstName '${validatedValue}' must be between {min} and {max} chracters long")
    @Column(length = 15, nullable = false)
    private String firstName;

    @NotBlank(message="Please provide not blank lastName")
    @NotNull(message="Please provide your lastName")
    @Size(min=1,max=15,message="lastName '${validatedValue}' must be between {min} and {max} chracters long")
    @Column(length=15,nullable=false)
    private String lastName;

    @Email(message="Please provide a valid email")
    @NotNull(message="Please provide your email")
    @Size(min=5,max=100,message="Email '${validatedValue}' must be between {min} and {max} chracters long")
    @Column(length=100,unique = true,nullable=false)
    private String email;

    @NotNull(message="Please provide your password")
    @NotBlank(message="Please provide your password")
    @Size(min=4,max=60,message="Password '${validatedValue}' must be between {min} and {max} chracters long")
    @Column(nullable=false,length=255)
    private String password;

    @Pattern(regexp = "^((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$",
            message = "Please provide valid phone number")
    @Column(length=14,nullable=false)
    private String mobilePhoneNumber;

    @NotBlank(message="Please provide not blank Adress")
    @NotNull(message="Please provide your Address")
    @Size(min=10,max=250,message="Adress '${validatedValue}' must be between {min} and {max} chracters long")
    @Column(length=250,nullable=false)
    private String address;




    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name="tbl_user_role",joinColumns = @JoinColumn(name="user_id"),
    inverseJoinColumns = @JoinColumn(name="role_id"))
    private Set<Role> roles = new HashSet<>();

    public User(String firstName, String lastName, String password,
                String mobilPhoneNumber, String email, String address,
                String ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.mobilePhoneNumber = mobilPhoneNumber;
        this.email = email;
        this.address = address;
        this.ssn = ssn;
    }

    public User(String firstName, String lastName, String password,
                String mobilPhoneNumber, String email, String address,
                String ssn, Set<Role> roles) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.mobilePhoneNumber = mobilPhoneNumber;
        this.email = email;
        this.address = address;
        this.ssn = ssn;
        this.roles = roles;
        
    }


    public Set<String> getRoles() {
        Set<String> roles1 = new HashSet<>();
        Role[] role = roles.toArray(new Role[roles.size()]);

        for (int i = 0; i < roles.size(); i++) {
            if (role[i].getName().equals(UserRole.ROLE_MANAGER))
                roles1.add("Manager");
            else if (role[i].getName().equals(UserRole.ROLE_EMPLOYEE))
                roles1.add("Employee");
            else
                roles1.add("Customer");
        }
        return roles1;
    }


    

}
