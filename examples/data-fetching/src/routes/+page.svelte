<script lang="ts">
    export let data;
</script>

<h2>My cool task list</h2>
<ul>
    {#each data.tasks as task}
        <li>
            <form method="post">
                <input type="hidden" name="id" value={task.id} />
                <input
                    type="checkbox"
                    name="completed"
                    checked={task.completed}
                />
                {task.id} - {`${task.name}: ${task.description}`}
                <button formaction="?/update">Update</button>
            </form>
        </li>
    {/each}
</ul>

<form method="POST" action="?/create">
    <input type="text" name="name" />
    <input type="text" name="description" />
    <button>Submit</button>
</form>
