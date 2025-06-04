package com.example.breathe;

public class Profile {
    //Variables
    private String name;
    private int age;
    private int weight;

    //No-Args Constructor
    public Profile () {}

    //Constructor
    public Profile (String name, int age, int weight)
    {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    //Getter Methods

    public String getName()
    {
        return name;
    }

    public int getAge()
    {
        return age;
    }

    public int getWeight()
    {
        return weight;
    }

    //Setter Methods

    public void setName(String name)
    {
        this.name = name;
    }

    public void setAge(int age)
    {
        this.age = age;
    }

    public void setWeight(int weight)
    {
        this.weight = weight;
    }



}