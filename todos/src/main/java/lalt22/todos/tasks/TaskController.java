package lalt22.todos.tasks;

import java.sql.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins="*", allowedHeaders="*")
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
	
	@GetMapping
	public ResponseEntity<List<Task>> getTasksByParam(@RequestParam Map<String, String> allParams) {		
		if (allParams.isEmpty()) {
			List<Task> allTasks = this.taskService.getAll();
			return new ResponseEntity<>(allTasks, HttpStatus.OK);
		}
		else {
			List<Task> filteredTasks = this.taskService.getFilteredTasks(allParams);
			return new ResponseEntity<>(filteredTasks, HttpStatus.OK);
		}
	}
	
	
//	@GetMapping
//	public ResponseEntity<List<Task>> getAllTasks () {
//		List<Task> allTasks = this.taskService.getAll();
//		return new ResponseEntity<>(allTasks, HttpStatus.OK);
//	}
	
//	@GetMapping("/{date}")
//	public ResponseEntity<List<Task>> getTaskByDate(@PathVariable String date) {
//		List<Task> tasksOnDate = this.taskService.getByDate(date);
//		System.out.println(tasksOnDate.toString());
//		return new ResponseEntity<>(tasksOnDate, HttpStatus.OK);
//	}
//	
	
	@PatchMapping("/{id}")
	public ResponseEntity<Task> updateTaskById(@Valid @RequestBody  UpdateTaskDTO data, @PathVariable Long id) throws Exception {
		Optional<Task> maybeUpdatedTask = this.taskService.updateTaskById(data, id);
		Task updatedTask = maybeUpdatedTask.orElseThrow();
		return new ResponseEntity<>(updatedTask, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Task> deleteTaskById(@PathVariable Long id) {
		boolean deleted = this.taskService.deleteTaskById(id);
		if(deleted) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		}
		else throw new Error();
	}	

}
