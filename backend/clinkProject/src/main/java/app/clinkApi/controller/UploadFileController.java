package app.clinkApi.controller;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import app.clinkApi.model.FileModel;
import app.clinkApi.repository.FileRepository;


@CrossOrigin(value="http://localhost:4200")
@RestController
public class UploadFileController {
	private static final String FILE_DIRECTORY = "F:\\clink\\frontend\\demov1\\src\\assets";
	@Autowired
	FileRepository fileRepository;
 
    /*
     * MultipartFile Upload
     */
    @PostMapping("/form-upload")
    public String uploadMultipartFile(@RequestParam("file") MultipartFile file) {
    	try {
    
    	
    		
    		Path filePath = Paths.get(FILE_DIRECTORY + "/" + file.getOriginalFilename());
             System.out.println(filePath);
    		Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
	    	FileModel filemode = new FileModel(file.getOriginalFilename());
	    	fileRepository.save(filemode);
	    	return "File uploaded successfully! -> filename = " + file.getOriginalFilename();
		} catch (	Exception e) {
			return "FAIL! Maybe You had uploaded the file before or the file's size > 500KB";
		}    
    }
}