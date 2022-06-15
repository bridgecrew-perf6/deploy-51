export default [
  {
    path: '/',
    component: () => import('../views/Personal/Trainer/Profile'),
    meta: {
      layout: 'main',
      userSettings: true,
    },
    name: 'PersonalTrainerProfile',
  },
  {
    path: 'profile-edit', 
    component: () => import('../views/Personal/Trainer/ProfileEdit'),
    meta: {
      layout: 'main',
      userSettings: true,
    },
    name: 'PersonalTrainerProfileEdit',
  },
  {
    path: 'groups', 
    component: () => import('../views/Personal/Trainer/Groups'),
    meta: {
      layout: 'main',
      userSettings: true,
    },
    name: 'PersonalTrainerGroups',
  },
  {
    path: 'groups/:id', 
    component: () => import('../views/Personal/Trainer/Group'),
    meta: {
      layout: 'main',
      userSettings: true,
    },
    name: 'PersonalTrainerGroup',
  },
  {
    path: 'sportsmans', 
    component: () => import('../views/Personal/Trainer/Sportsmans'),
    meta: {
      layout: 'main',
      userSettings: true,
    },
    name: 'PersonalTrainerSportsmans',
  },
]
