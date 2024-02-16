package lalt22.todos.tasks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/tasks")
public class TaskController {
	
	@Autowired
	private TaskService taskService;
	
	@PostMapping
	public ResponseEntity<Task> createTask(@Valid @RequestBody  CreateTaskDTO data) {
		System.out.println(data.toString());
//		String returnedString = this.taskService.createTask(data);
		Task createdTask = this.taskService.createTask(data);
		return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
	}
}
