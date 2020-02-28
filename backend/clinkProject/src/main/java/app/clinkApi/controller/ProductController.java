package app.clinkApi.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import app.clinkApi.model.FileModel;
import app.clinkApi.model.Product;
import app.clinkApi.model.ProductTemp;
import app.clinkApi.service.ProductService;

@CrossOrigin(value="http://localhost:4200")
@RestController
@RequestMapping(value="/product")
public class ProductController {

	private static final String FILE_DIRECTORY = "F:\\clink\\frontend\\demov1\\src\\assets";
	private byte[] bytes;
	
	@Autowired
	ProductService productService;
	
	
	@GetMapping(value="/allProducts")
	public List<Product> findAllProducts(){
		System.out.println(productService.getAllProducts());
		return productService.getAllProducts();
		
	}
	
	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		this.bytes = file.getBytes();
	}
	
	@GetMapping(value = "/cars")
	public byte[][] getListFiles() throws IOException {
		System.out.println("checking");
		byte[][] imgarr = new byte[2][];
        String path = System.getProperty("user.dir") + "\\src\\main\\resources\\abc.png";
        String path2 = System.getProperty("user.dir") + "\\src\\main\\resources\\logo.jpg";
		System.out.println("called");
		imgarr[0] = Files.readAllBytes(Paths.get(path));
		imgarr[1] = Files.readAllBytes(Paths.get(path2));

		return imgarr;
		

	}
	
	
	
	@PostMapping(value="/addProduct")
	public String addProduct(@RequestBody Product  product){
		
		product.setPicByte(this.bytes);
		this.productService.saveProduct(product);
		this.bytes = null;
		return "product added successfully";
		
//		  System.out.println("***********");
//		  System.out.println(productTemp);
//		  
//
//		MultipartFile file=productTemp.getFile();
//		System.out.println(file);
//		Path filePath = Paths.get(FILE_DIRECTORY + "/" + file.getOriginalFilename());
//         System.out.println("file path"+ filePath);
//		try {
//			Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//    	String name=file.getOriginalFilename();
//    	
//    	Product product=new Product(productTemp.getProductName(),productTemp.getProductPrice(),name,productTemp.getProductDescription());
//    	
//    	productService.saveProduct(product);
//    	return "File uploaded successfully! -> filename = " + file.getOriginalFilename();
//	
	
		
	}
	

}
