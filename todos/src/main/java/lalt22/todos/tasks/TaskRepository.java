package lalt22.todos.tasks;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
	List<Task> findByDueDate(String date);
	List<Task> findByDescriptionContaining(String substring);
}
