package lalt22.todos.tasks;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
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
			System.out.println(data.toString());
			Task newTask = mapper.map(data, Task.class);
			return this.repo.save(newTask);
	}
}
