package app.clinkApi.model;

import org.springframework.web.multipart.MultipartFile;

public class ProductTemp {
	
	private String productName;
	private Double productPrice;
	private MultipartFile productFile;
	private String productDescription;
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Double getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(Double productPrice) {
		this.productPrice = productPrice;
	}
	public MultipartFile getFile() {
		return productFile;
	}
	public void setFile(MultipartFile file) {
		this.productFile = file;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public ProductTemp(String productName, Double productPrice, MultipartFile file, String productDescription) {
		super();
		this.productName = productName;
		this.productPrice = productPrice;
		this.productFile = file;
		this.productDescription = productDescription;
	}
	public ProductTemp(){
		
	}
	@Override
	public String toString() {
		return "ProductTemp [productName=" + productName + ", productPrice=" + productPrice + ", productFile=" + productFile
				+ ", productDescription=" + productDescription + "]";
	}
	
	

}
