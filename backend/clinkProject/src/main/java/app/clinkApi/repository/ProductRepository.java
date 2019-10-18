package app.clinkApi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import app.clinkApi.model.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product,Integer>{

}
