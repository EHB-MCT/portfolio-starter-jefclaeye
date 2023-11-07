exports.seed = function(knex) {
    return knex('projects')
        .del()
        .then(function() {
            return knex('projects').insert([{
                    name: 'Project A',
                    date: '2023-09-30',
                    info: 'This is project A information.',
                },
                {
                    name: 'Project B',
                    date: '2023-10-15',
                    info: 'This is project B information.',
                },
                // Add more projects as needed
            ]);
        });
};