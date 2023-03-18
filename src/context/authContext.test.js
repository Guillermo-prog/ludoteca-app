import { render, screen } from "@testing-library/react";
import { AuthProvider, useAuth } from "./authContext";

describe("AuthContext", () => {
  it("throws an error when a component not covered with in AuthProvider", () => {
    function ComponentWithoutAuth() {
      useAuth();
      return null;
    }
    expect(() => render(<ComponentWithoutAuth />)).toThrow(
      "There is not authProvider"
    );
  });

  it("renders children when wrapped in AuthProvider", () => {
    render(
      <AuthProvider>
        <div>Test</div>
      </AuthProvider>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("useAuth returns the user object from the context", () => {
    function UserComponent() {
      const { user } = useAuth();
      return <div>{user.login.toString()}</div>;
    }
    render(
      <AuthProvider>
        <UserComponent />
      </AuthProvider>
    );
    expect(screen.getByText("true")).toBeInTheDocument();
  });
});
