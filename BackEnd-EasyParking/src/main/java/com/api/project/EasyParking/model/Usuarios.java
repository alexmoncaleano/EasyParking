/*package com.api.project.EasyParking.model;

import com.sun.istack.NotNull;
import lombok.Data;

import java.io.Serializable;
import javax.persistence.*;

@Data
@Entity
@Table(name = "usuarios", indexes = {
        @Index(name = "idx_usuarios_id_usuarios", columnList = "id_usuarios")
})
public class Usuarios implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_Usuarios")
    private Integer id_Usuarios;

    @Column(name = "usuario")
    private String usuario;

    @Column(name = "clave")
    private String clave;

    @Column(name = "rol")
    private String rol;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_Personas")
    private Personas id_Persona;

    public Usuarios(){}

}
*/