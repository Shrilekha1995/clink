package app.clinkApi.model;

import java.nio.file.Path;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name="file_model")
public class FileModel {
	@Id
	@GeneratedValue
    @Column(name = "id")
	@JsonView(View.FileInfo.class)
    private Long id;
	
    @Column(name = "name")
    @JsonView(View.FileInfo.class)
	private String name;
    
	
    @Column(name = "imagePath")
    private String imagePath;
	
	public FileModel(){}

	public FileModel(String name, String imagePath) {
		super();
		this.name = name;
		this.imagePath = imagePath;
	}
	
	public FileModel(String name) {
		super();
		this.name = name;
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	@Override
	public String toString() {
		return "FileModel [id=" + id + ", name=" + name + ", imagePath=" + imagePath + "]";
	}

	public FileModel(Long id, String name, String imagePath) {
		super();
		this.id = id;
		this.name = name;
		this.imagePath = imagePath;
	}
	
	
	
	
	

}