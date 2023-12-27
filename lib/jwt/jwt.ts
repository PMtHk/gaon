// jwt settings
import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

if (JWT_SECRET === undefined) throw new Error('jwtSecret is not defined');

// generate accessToken
export function generateAccess(
  _id: string,
  usernmame: string,
): string {
  return jwt.sign({ _id, username: usernmame }, JWT_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: '3h'
  });
}

// verify accessToken
export function verifyAccess(accessToken: string): {
  ok: boolean;
  _id?: string;
  message?: string;
} {
  let decoded: any = null;

  try {
    decoded = jwt.verify(accessToken, JWT_SECRET as string);
    return {
      ok: true,
      _id: decoded._id
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error.message
    };
  }
}

// generate refreshToken
export function generateRefresh(_id: string): string {
  return jwt.sign({ _id }, JWT_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: '14d'
  });
}

// verify refreshToken
export function verifyRefresh(refreshToken: string): {
  ok: boolean;
  message?: string;
} {
  try {
    jwt.verify(refreshToken, JWT_SECRET as string);
    return {
      ok: true
    };
  } catch (error: any) {
    return {
      ok: false,
      message: error.message
    };
  }
}
