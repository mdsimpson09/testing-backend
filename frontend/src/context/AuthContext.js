// AuthContext.js

const AuthContext = React.createContext(); 

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => {
    // login logic
    setUser(userData); 
  }

  const logout = () => {
    // logout logic
    setUser(null);
  }

  return (
    <AuthContext.Provider 
      value={{ user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}
Now any child component wrapped in <AuthProvider> can easily access the auth state and methods via the useAuth hook.

This helps avoid prop drilling for authentication and provides it in one centralized place.