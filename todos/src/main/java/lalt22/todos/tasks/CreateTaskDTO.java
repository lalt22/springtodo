package lalt22.todos.tasks;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateTaskDTO {
	@NotBlank
	private String description;
	
	@NotNull
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	private Date dueDate;
	
	
	
	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public Date getDueDate() {
		return dueDate;
	}



	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}



	public String toString() {
		return this.description + this.dueDate;
	}
}
