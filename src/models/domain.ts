import DomainDB from "../database/domain/domain"

export class Domain extends DomainDB {
    selectById(id: number): Promise<{ createdAt: Date; url: string; id: number; } | null> {
        return super.selectById(id);
    }

    selectPage(page: number, pageSize: number): Promise<{ id: number; url: string; }[]> {
        return super.selectPage(page, pageSize);
    }

    insert(domain: string): Promise<{ url: string; id: number; }> {
        return super.insert(domain);
    }

    delete(id: number): Promise<{ id: number; url: string; createdAt: Date; }> {
        return super.delete(id);
    }
}