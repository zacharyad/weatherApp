let nav = {
  li: {
    width: '200px',
  },
  navWrapper: {
    backgroundColor: 'rgba(0,0,0,.5)',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkWrapper: {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'space-around',
  },
  logo: {
    margin: 'auto 20px',
  },
};

let locationForm = {
  wrapper: {
    margin: '20px 20px',
    padding: '40px 80px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: '10px',
  },
  inputs: {},
  button: {},
};

let app = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};

let styles = {
  nav,
  locationForm,
  app,
};

module.exports = styles;
