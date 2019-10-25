package app.clinkApi.service;

import java.util.List;

import app.clinkApi.model.Product;


public interface ProductService {

	
	public List<Product> getAllProducts();

	public void saveProduct(Product product);
}
