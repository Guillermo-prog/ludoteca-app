import { renderHook } from "@testing-library/react-hooks";
import { render, screen } from "@testing-library/react";
import { AuthProvider, useAuth } from "./authContext";

describe("AuthContext", () => {
  it("throws an error when a component not covered with in AuthProvider", () => {
    const { result } = renderHook(() => useAuth());
    expect(result.error).toEqual(Error("There is not authProvider coverage"));
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
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <AuthProvider>{children}</AuthProvider>,
    });
    expect(result.current.user).toEqual({ login: true });
  });
});
