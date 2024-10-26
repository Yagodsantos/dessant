package com.mycompany.aula2java;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author YAGODOSSANTOSESOUZA
 */
public class pessoa {
    private String nome;
    private int idade;
    
    //constructor
    public pessoa (String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }
    
    //Metodos
    public void apresentar (){
      System.out.println("Ola meu nome é" + nome + "e tenho" + idade + "anos.");
}
}
