exports.seed = function(knex) {

    return knex('projects')
        .select()
        .then(function(da) {
            if (da.length == 0) {
                return knex('projects').insert([{
                        name: 'Project A',
                        date: Date.now(),
                        info: 'This is project A information.',
                    },
                    {
                        name: 'Project B',
                        date: Date.now(),
                        info: 'This is project B information.',
                    },
                    // Add more projects as needed
                ]);
            }
        });

};