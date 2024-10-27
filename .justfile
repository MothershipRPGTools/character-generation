# Install dependencies
install:
    pnpm install --frozen-lockfile

# Build all packages
build: install
    pnpm nx run-many -t build

# Lint all code
lint: 
    pnpm nx run-many -t lint

# Fix all linting issues
lint-fix: 
    pnpm nx run-many -t lint:fix

# Format all code
format:
    pnpm nx run-many -t format

# Run all tests
test:
    pnpm nx run-many -t test

# Sync all dependencies
dep-sync:
    pnpm syncpack fix-mismatches
