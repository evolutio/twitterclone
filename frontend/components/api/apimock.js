import Vue from 'vue'

var logged_user = null;

function mockasync (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: data}), 600)
  })
}

const api = {
    login(username, password){
        if(password){
            logged_user = {
                username: username,
                first_name: 'Mark',
                last_name: 'Zuckerberg',
                email: 'zuck@facebook.com',
                notifications_enabled: true,
                permissions:{
                    ADMIN: username == 'admin',
                    STAFF: username == 'admin',
                }
            };
        }
        return mockasync(logged_user);
    },
    logout(){
        logged_user = null;
        return mockasync({});
    },
    whoami(){
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    add_todo(newtask){
        return mockasync({description: newtask, done: false});
    },
    list_todos(){
        return mockasync({
            todos: [
                {description: 'Do the laundry', done: true},
                {description: 'Walk the dog', done: false}
            ]
        });
    },
    get_user_details(username){
      const avatar = {
        '@isaacnewton': 'http://1.bp.blogspot.com/-A9_ROvP0efw/TZI9dUsXAKI/AAAAAAAAGCI/rD_-a3ZBF3U/s1600/Isaac_Newton_Biography%255B1%255D.jpg',
        '@descartes': 'http://www.filosofia.com.br/figuras/biblioteca/Descartes.jpg',
        '@einstein': 'http://meioorc.com/wp-content/uploads/2015/07/como-vejo-o-mundo-einstein.jpg'
      }[username]
      return mockasync({
        username: username,
        avatar: avatar,
        last_tweet: 'Penso, logo existo',
        ifollow: true
      })
    },
    follow (username) {
      return mockasync({})
    },
    unfollow (username) {
      return mockasync({})
    },
    list_tweets(username){
        const d = new Date()
        const _1min = 60000
        const _1h = 60 * _1min
        const d1 = new Date(d - 15 * _1min)
        const d2 = new Date(d - 2 * _1h)
        const d3 = new Date(d - 48 * _1h)
        return mockasync([
            {
              id: 1,
              author_name: 'Isaac Newton',
              author_username: username || '@isaacnewton',
              author_avatar: 'http://1.bp.blogspot.com/-A9_ROvP0efw/TZI9dUsXAKI/AAAAAAAAGCI/rD_-a3ZBF3U/s1600/Isaac_Newton_Biography%255B1%255D.jpg',
              created_at: d1.toISOString(),
              text: 'A tendência dos corpos, quando nenhuma força é exercida sobre eles, é permanecer em seu estado natural, ou seja, repouso ou movimento retilíneo e uniforme.'
            },
            {
              id: 2,
              author_name: 'René Descartes',
              author_username: username || '@descartes',
              author_avatar: 'http://www.filosofia.com.br/figuras/biblioteca/Descartes.jpg',
              created_at: d2.toISOString(),
              text: 'Penso, logo existo'
            },
            {
              id: 3,
              author_name: 'Albert Einstein',
              author_username: username || '@einstein',
              author_avatar: 'http://meioorc.com/wp-content/uploads/2015/07/como-vejo-o-mundo-einstein.jpg',
              created_at: d3.toISOString(),
              text: 'Insanidade é continuar fazendo sempre a mesma coisa e esperar resultados diferentes'
            }
        ])
    }
};

export default api;
