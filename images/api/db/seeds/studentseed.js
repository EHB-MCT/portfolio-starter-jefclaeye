exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('students')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('students').insert([{
                    first_name: 'John',
                    last_name: 'Doe',
                    age: 20,
                    email: 'john.doe@example.com',
                },
                {
                    first_name: 'Jane',
                    last_name: 'Smith',
                    age: 22,
                    email: 'jane.smith@example.com',
                },
                // Add more students as needed
            ]);
        });
};