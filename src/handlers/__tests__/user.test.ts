import * as user from '../user'

describe('user handler', () => {
  it('should should create a new user', async () => {
    // beforeEach(jest.dr)
    const req = {
      body: {
        username: 'muhammed',
        password: 'hello'
      }
    }
    const res = {
      json(token) {
        expect(token).toBeTruthy()
      }
    }
    await user.createNewUser(req, res, () => {})

  })
})