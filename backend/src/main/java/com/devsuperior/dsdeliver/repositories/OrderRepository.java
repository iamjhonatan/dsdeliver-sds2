package com.devsuperior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Order;

// Objeto repository: eh o objeto que faz acesso ao banco de dados.
public interface OrderRepository extends JpaRepository<Order, Long>{

}
