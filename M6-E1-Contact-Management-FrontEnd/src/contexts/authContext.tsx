import Toast from "@/components/toast";
import { CustomerData } from "@/schema/customer.schema";
import { SessionData } from "@/schema/session.schema";
import { api } from "@/service/api";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext } from "react";

interface Props {
  children: ReactNode;
}

interface AuthProviderData {
  register: (customerdata: CustomerData) => void;
  session: (sessionData: SessionData) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();

  const register = async (customerData: CustomerData) => {

    api
      .post("/customers/register", customerData)
      .then(() => {
        Toast({ message: "Cadastro realizado com sucesso", isSucess: true });
        router.push("/");
      })
      .catch((error) => {
        Toast({ message: "Opa! cadastro não realizado, tente novamente" });
        console.log(error);
      });
  };

  const session = (sessionData: SessionData) => {
    api
      .post("/session", sessionData)
      .then((response) => {
        localStorage.setItem("@Management:accessToken", response.data.accessToken)       
      })
      .then(() => {
        Toast({ message: "Login realizado com sucesso", isSucess: true });
        router.push("/customers");
      })
      .then(() => {})
      .catch((error) => {
        console.log(error);
        Toast({ message: "Credenciais inválidas" });
      });
  };

  
  return (
    <AuthContext.Provider value={{ register, session }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
