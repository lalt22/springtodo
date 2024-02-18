package lalt22.todos.tasks;

import java.text.ParseException;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class TaskService {
	@Autowired
	private TaskRepository repo;
	
	@Autowired
	private ModelMapper mapper;
	
	public Task createTask(CreateTaskDTO data) {
			Task newTask = mapper.map(data, Task.class);
			return this.repo.save(newTask);
	}
	
	public List<Task> getAll() {
		return this.repo.findAll();
	}
	
	public List<Task> getByDate(String date) {
		return this.repo.findByDueDate(date);
	}
	
	public List<Task> getFilteredTasks(Map<String, String> allParams) {
			System.out.println(allParams.get("description"));
			System.out.println(allParams.get("completed"));
			System.out.println(allParams.get("dueDate"));
//
//			
			if (allParams.get("description") != null) {
				System.out.println("RETURNING DESCRIPTION");
				return this.repo.findByDescriptionContaining(allParams.get("description"));
			}
			if(allParams.get("completed") != null) {
				System.out.println("RETURNING COMPLETED");
				return this.repo.findByCompleted(Boolean.parseBoolean(allParams.get("completed")));
			}
			if(allParams.get("dueDate") != null) {
				System.out.println("RETURNING DUEDATE");
				return this.repo.findByDueDate(allParams.get("dueDate"));
			}
			System.out.println("RETURNING NULL");
			return null;
	}
	
	public Optional<Task> updateTaskById(UpdateTaskDTO data, Long id) {
		Optional<Task> maybeTask = this.repo.findById(id);
		if(maybeTask.isEmpty()) {
			return maybeTask;
		}
		Task foundTask = maybeTask.get();
		mapper.map(data, foundTask);
		Task updatedTask = this.repo.save(foundTask);
		return Optional.of(updatedTask);
	}
	
	public boolean deleteTaskById(Long id) {
		Optional<Task> maybeTask = this.repo.findById(id);
		if(maybeTask.isEmpty()) {
			return false;
		}
		this.repo.deleteById(id);
		return true;
	}
}
