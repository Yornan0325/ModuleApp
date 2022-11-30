import React from 'react';
const Todo = ({ todo, isLoading }) => {
    console.log(todo)
    return (
        <div>
            {isLoading ?
                <h1>Cargando datos...</h1> :

                <div class="flow-root">
                    <ul role="list" class="divide-y border-b-2 divide-gray-700 dark:divide-gray-700">
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-shrink-0">
                                    <img class="w-8 h-8 rounded-full" src="https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png" alt="Lana image" />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {todo.title}
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $367
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

            }

        </div>
    );
}
export default Todo