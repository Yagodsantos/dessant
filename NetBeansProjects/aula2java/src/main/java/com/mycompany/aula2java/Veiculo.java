/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.aula2java;

/**
 *
 * @author YAGODOSSANTOSESOUZA
 */
public class Veiculo {
    private String marca;
    
    
    public Veiculo(String marca){
        this.marca = marca;
       
    }
    
    public void exibitMarca(){
        System.out.println("Marca do veiculo:" + marca);
    }
}
