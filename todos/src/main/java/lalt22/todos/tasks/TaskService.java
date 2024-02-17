package lalt22.todos.tasks;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Locale;

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
}
