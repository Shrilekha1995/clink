package app.clinkApi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.clinkApi.model.Product;
import app.clinkApi.service.ProductService;

@RestController
@RequestMapping(value="/product")
public class ProductController {

	
	@Autowired
	ProductService productService;
	
	
	@GetMapping(value="/allProducts")
	public List<Product> findAllProducts(){
		System.out.println(productService.getAllProducts());
		return productService.getAllProducts();
		
	}
}
